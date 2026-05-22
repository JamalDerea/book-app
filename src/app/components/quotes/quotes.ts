import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QuoteService } from '../../services/quote';

@Component({
  selector: 'app-quotes',
  imports: [CommonModule, FormsModule],
  templateUrl: './quotes.html',
  styleUrl: './quotes.css',
})
export class Quotes implements OnInit {
  quotes: any[] = [];
  newQuote = { favouriteQuote: '' };
  editingQuote: any = null;

  constructor(private quoteService: QuoteService) {}

  ngOnInit(): void {
    this.loadQuotes();
  }

  loadQuotes(): void {
    this.quoteService.getQuotes().subscribe({
      next: (data) => this.quotes = data,
      error: (err) => console.error(err)
    });
  }

  createQuote(): void {
    this.quoteService.createQuote(this.newQuote).subscribe({
      next: () => {
        this.loadQuotes();
        this.newQuote = { favouriteQuote: '' };
      },
      error: (err) => console.error(err)
    });
  }

  deleteQuote(id: number): void {
    this.quoteService.deleteQuote(id).subscribe({
      next: () => this.loadQuotes(),
      error: (err) => console.error(err)
    });
  }

  startEdit(quote: any): void {
    this.editingQuote = { ...quote };
  }

  saveEdit(): void {
    this.quoteService.updateQuote(this.editingQuote.quoteId, this.editingQuote).subscribe({
      next: () => {
        this.loadQuotes();
        this.editingQuote = null;
      },
      error: (err) => console.error(err)
    });
  }

  cancelEdit(): void {
    this.editingQuote = null;
  }
}