import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

export interface Ticket {
  id: number;
  title: string;
  description: string;
  status: 'open' | 'in-progress' | 'closed';
  priority: 'low' | 'medium' | 'high';
  assigneeId: number;
}

/**
 * Service to simulate API calls with delays.
 * Used in examples to demonstrate async data loading patterns.
 */
@Injectable({
  providedIn: 'root',
})
export class FakeApiService {
  private readonly users: User[] = [
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'Developer' },
    { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'Designer' },
    { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', role: 'Manager' },
  ];

  private readonly tickets: Ticket[] = [
    {
      id: 1,
      title: 'Fix login bug',
      description: 'Users cannot log in with special characters',
      status: 'open',
      priority: 'high',
      assigneeId: 1,
    },
    {
      id: 2,
      title: 'Update dashboard',
      description: 'Add new metrics to the dashboard',
      status: 'in-progress',
      priority: 'medium',
      assigneeId: 2,
    },
    {
      id: 3,
      title: 'Refactor API service',
      description: 'Improve error handling in API service',
      status: 'closed',
      priority: 'low',
      assigneeId: 1,
    },
  ];

  /**
   * Simulates fetching users with a delay
   */
  getUsers(): Observable<User[]> {
    return of([...this.users]).pipe(delay(500));
  }

  /**
   * Simulates fetching tickets with a delay
   */
  getTickets(): Observable<Ticket[]> {
    return of([...this.tickets]).pipe(delay(500));
  }

  /**
   * Simulates fetching a single user by ID
   */
  getUserById(id: number): Observable<User | undefined> {
    const user = this.users.find((u) => u.id === id);
    return of(user).pipe(delay(300));
  }
}

