import Chip from "@mui/material/Chip";
import DoneIcon from "@mui/icons-material/Done";
import CachedIcon from "@mui/icons-material/Cached";
import ShippingIcon from "@mui/icons-material/LocalShipping";
import PackingIcon from "@mui/icons-material/MoveToInbox";
export default function Fulfillment(props) {
  switch (props.orderStatus) {
    case "Procesando":
      return (
        <Chip
          icon={<CachedIcon style={{ color: "#263238" }} fontSize="small" />}
          label={"Procesando"}
          style={{
            color: "#263238",
            backgroundColor: "#ECEFF1",
            paddingLeft: 2,
          }}
        />
      );

    case "Preparacion":
      return (
        <Chip
          icon={<PackingIcon style={{ color: "#FF6F00" }} fontSize="small" />}
          label={props.orderStatus}
          style={{
            color: "#FF6F00",
            backgroundColor: "#FFECB3",
            paddingLeft: 2,
          }}
        />
      );

    case "Entregado":
      return (
        <Chip
          icon={<DoneIcon style={{ color: "#33691E" }} fontSize="small" />}
          label={props.orderStatus}
          style={{
            color: "#33691E",
            backgroundColor: "#DCEDC8",
            paddingLeft: 2,
          }}
        />
      );

    case "Logistica":
      return (
        <Chip
          icon={<ShippingIcon style={{ color: "#0D47A1" }} fontSize="small" />}
          label={"Logistica"}
          style={{
            color: "#0D47A1",
            backgroundColor: "#BBDEFB",
            paddingLeft: 2,
          }}
        />
      );

    default:
      return (
        <Chip
          icon={<DoneIcon style={{ color: "#fff" }} fontSize="small" />}
          label={props.orderStatus}
        />
      );
  }
}
