import { Fragment, useState } from "react";
import { saveCategory } from "../../store/product";
import {
  Button,
  Paper,
  Table,
  Grid,
  Box,
  TextField,
  Typography,
} from "@mui/material";
import RowOrders from "./Table/RowOrders";

export default function CategoryTable({ category, refresh }) {
 
  const [categories, saveCategories] = useState();
  const [send, setSend] = useState(false);
  const save = async () => {
    await saveCategory(categories, saveCategories).then(() => refresh());
   setSend(true)
  };

  return (
    <Fragment>
      <Paper>
        <Grid item xs={4}>
          <Box>
            <Typography variant="subtitle1">Agregar Categoria</Typography>
          </Box>

          <Grid item xs={12}>
            <TextField
              id="outlined-name"
              label="Nombre de categoria"
              margin="normal"
              variant="outlined"
              onChange={(e) => {
                saveCategories({
                  nombre: e.target.value,
                });
              }}
              fullWidth
              required
            />
          </Grid>
          <Button
            variant="contained"
            color="primary"
            onClick={save}
            type="submit"
          >
            {!send===true ? "Enviar" : "Enviando..."}
          </Button>
        </Grid>
        <hr></hr>

        <Table>
          <RowOrders data={category} refresh={refresh} />
        </Table>
      </Paper>
      <div style={{ width: "100%", marginTop: "1em" }}></div>
    </Fragment>
  );
}
