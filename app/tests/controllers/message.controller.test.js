import * as controller from '../controller/message.controller';
import { NextFunction, Request, Response } from 'express';
import * as models from '../model/message.model.js';
const testId = 'test-id';
const testCollection = 'test-entity-name';
jest.mock('../services/db.service', () => ({
  __esModule: true,
  getAll: jest.fn(),
  getById: jest.fn(),
}));
afterAll(() => {
  jest.clearAllMocks();
});
describe('Test controller', () => {
  test('controller.getById calls service once with supplied collection & id', async () => {
    jest.spyOn(service, 'getById');
    await controller.getById(
      { params: { id: testId, collection: testCollection } } as unknown as Request,
      {} as unknown as Response,
      jest.fn() as NextFunction
    );
    expect(service.getById).toBeCalledTimes(1);
    expect(service.getById).toBeCalledWith(testCollection, testId);
  });
  test('Test controller.getAll calls service once with supplied collection & calls the next middleware in chain', async () => {
    jest.spyOn(service, 'getAll').mockImplementation();
    const next: NextFunction = jest.fn();
    await controller.getAll(
      { params: { collection: testCollection } } as unknown as Request,
      {} as unknown as Response,
      next
    );
    expect(service.getAll).toBeCalledTimes(1);
    expect(service.getAll).toBeCalledWith(testCollection);
    expect(next).toBeCalledTimes(1);
  });
});