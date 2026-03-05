import { leerAhoraReducer } from '../app/store/leer-ahora.reducer';
import { agregarLeerAhora, limpiarLeerAhora } from '../app/store/leer-ahora.actions';

describe('LeerAhora Reducer', () => {

  it('debe retornar estado inicial vacío', () => {
    const state = leerAhoraReducer(undefined, { type: '@ngrx/store/init' } as any);
    expect(state).toEqual([]);
  });

  it('debe agregar un item al despachar agregarLeerAhora', () => {
    const item = { id: 1, titulo: 'Test Item', categoria: 'Tech' };
    const state = leerAhoraReducer([], agregarLeerAhora({ item }));
    expect(state.length).toBe(1);
    expect(state[0].titulo).toBe('Test Item');
  });

  it('debe agregar múltiples items correctamente', () => {
    const item1 = { id: 1, titulo: 'Item 1' };
    const item2 = { id: 2, titulo: 'Item 2' };
    let state = leerAhoraReducer([], agregarLeerAhora({ item: item1 }));
    state = leerAhoraReducer(state, agregarLeerAhora({ item: item2 }));
    expect(state.length).toBe(2);
  });

  it('debe limpiar el listado al despachar limpiarLeerAhora', () => {
    const item = { id: 1, titulo: 'Test' };
    let state = leerAhoraReducer([], agregarLeerAhora({ item }));
    state = leerAhoraReducer(state, limpiarLeerAhora());
    expect(state).toEqual([]);
  });

});
