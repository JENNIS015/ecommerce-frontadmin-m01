import PropTypes from "prop-types";
import clsx from "clsx";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import InfoIcon from "@mui/icons-material/Info";
import { amber, green } from "@mui/material/colors";
import SnackbarContent from "@mui/material/SnackbarContent";
import WarningIcon from "@mui/icons-material/Warning";
import { makeStyles } from "@mui/styles";

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
};

const useStyles1 = makeStyles((theme) => ({
  success: {
    backgroundColor: green[600],
  },
  error: {
    color: "#b71c1c",
    backgroundColor: "#ffcdd2",
  },
  info: {
    backgroundColor: theme.palette.primary.main,
  },
  warning: {
    backgroundColor: amber[700],
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1),
  },
  message: {
    display: "flex",
    alignItems: "center",
  },
}));

function MySnackbarContentWrapper(props) {
  const classes = useStyles1();
  const { className, message, onClose, variant, ...other } = props;
  const Icon = variantIcon[variant];

  return (
    <SnackbarContent
      className={clsx(classes[variant], className)}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={classes.message}>
          <Icon className={clsx(classes.icon, classes.iconVariant)} />
          {message}
        </span>
      }
      {...other}
    />
  );
}

MySnackbarContentWrapper.propTypes = {
  className: PropTypes.string,
  message: PropTypes.string,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf(["error", "info", "success", "warning"]).isRequired,
};

const useStyles2 = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
    boxShadow: "none",
  },
}));

export default function CustomizedSnackbars(props) {
  const classes = useStyles2();

  return (
    <MySnackbarContentWrapper
      variant={props.variant}
      className={classes.margin}
      message={props.message}
    />
  );
}
