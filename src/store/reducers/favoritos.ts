import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type FavoritoState = {
  itens: Produto[]
}
const initialState: FavoritoState = {
  itens: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const favoritos = action.payload

      if (state.itens.find((p) => p.id === favoritos.id)) {
        state.itens = state.itens.filter((p) => p.id !== favoritos.id)
      } else {
        state.itens.push(favoritos)
      }
    }
  }
})

export const { favoritar } = favoritosSlice.actions

export default favoritosSlice.reducer
