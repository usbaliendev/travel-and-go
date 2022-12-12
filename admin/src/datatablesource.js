export const userColumns = [
  { field: "_id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "Usuário",
    width: 175,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 225,
  },

  {
    field: "country",
    headerName: "País",
    width: 100,
  },
  {
    field: "city",
    headerName: "Cidade",
    width: 100,
  },
  {
    field: "phone",
    headerName: "Telefone",
    width: 150,
  },
];

export const hotelColumns = [
  { field: "_id", headerName: "ID", width: 70 },
  {
    field: "name",
    headerName: "Nome",
    width: 200,
  },
  {
    field: "type",
    headerName: "Tipo",
    width: 150,
  },
  {
    field: "title",
    headerName: "Descrição",
    width: 230,
  },
  {
    field: "city",
    headerName: "Cidade",
    width: 150,
  },
];

export const roomColumns = [
  { field: "_id", headerName: "ID", width: 70 },
  {
    field: "title",
    headerName: "Título",
    align:'center',
    width: 230,
  },
  {
    field: "desc",
    headerName: "Descrição",
    align:'center',
    width: 200,
  },
  {
    field: "price",
    headerName: "Preço",
    align:'center',
    width: 125,
  },
  {
    field: "maxPeople",
    headerName: "Max Pessoas",
    width: 100,
    align:'center'
  },
];
