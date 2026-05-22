import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookService } from '../../services/book';

@Component({
  selector: 'app-books',
  imports: [CommonModule, FormsModule],
  templateUrl: './books.html',
  styleUrl: './books.css',
})
export class Books implements OnInit {
  books: any[] = [];
  newBook = { bookName: '', author: '', genre: '', releaseDate: '' };
  editingBook: any = null;

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(): void {
    this.bookService.getBooks().subscribe({
      next: (data) => this.books = data,
      error: (err) => console.error(err)
    });
  }

  createBook(): void {
    this.bookService.createBook(this.newBook).subscribe({
      next: () => {
        this.loadBooks();
        this.newBook = { bookName: '', author: '', genre: '', releaseDate: '' };
      },
      error: (err) => console.error(err)
    });
  }

  deleteBook(id: number): void {
    this.bookService.deleteBook(id).subscribe({
      next: () => this.loadBooks(),
      error: (err) => console.error(err)
    });
  }

  startEdit(book: any): void {
    this.editingBook = { ...book };
  }

  saveEdit(): void {
    this.bookService.updateBook(this.editingBook.bookId, this.editingBook).subscribe({
      next: () => {
        this.loadBooks();
        this.editingBook = null;
      },
      error: (err) => console.error(err)
    });
  }

  cancelEdit(): void {
    this.editingBook = null;
  }
}