export interface DataRepository<T> {
  getAll(): T[];
  getById(id: number);
  getByUsername(username);
  // Add other methods for data manipulation, e.g., create, update, delete, etc.
}
