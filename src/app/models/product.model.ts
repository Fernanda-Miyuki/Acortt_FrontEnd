export interface Product {
    prod_id: number
    prod_nome: string
    prod_marca: string
    prod_preco: string
    prod_descricao: string
    prod_data_public: string
    prod_ativo: ProdAtivo
    prod_foto: string
    prod_categoria: string
    usu_id: number
  }
  
  export interface ProdAtivo {
    type: string
    data: number[]
  }