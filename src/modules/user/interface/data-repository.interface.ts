export interface DataRepository<T> {
  getAll(): T[];
  getById(id: number);
  getByExpression(expression);
  // Add other methods for data manipulation, e.g., create, update, delete, etc.
}
