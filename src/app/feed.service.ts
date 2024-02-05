import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Book} from "./product.interface";

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  BASE_URL = `https://www.googleapis.com/books/v1/volumes`

  httpClient = inject(HttpClient);

  getBooks(query: string): Observable<Book[]> {
    return this.httpClient.get<any>(`${this.BASE_URL}?q=${query}`)
      .pipe(
        map((res: any) => res.items),
        map((items: any[]) => items.map((item) => ({
          imageUrl: item.volumeInfo.imageLinks.thumbnail,
          title: item.volumeInfo.title,
          price: item.volumeInfo.pageCount,
          id: item.id
        })))
      )
  }

  getBookById(query: string, bookId: string): Observable<Book | undefined> {
    return this.getBooks(query).pipe(
      map((books: Book[]) => books.find(b => b.id === bookId))
    )
  }


}
