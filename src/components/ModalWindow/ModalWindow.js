import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import AccessibilityNewIcon from "@material-ui/icons/AccessibilityNew";
import {makeStyles} from "@material-ui/core/styles";

// модальное окно по добавлению нового человека
export function ModalWindow({addNewWorker}) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [newName, SetNewName] = useState('');
    const [newLastName, SetNewLastName] = useState('');
    const [newDepartment, SetNewDepartment] = useState('');


    const useStyles = makeStyles({
        button: {
            color: 'black',
            backgroundColor: '#FFEECC',
            margin: '15px',
            float: "left"
        }
    });

// функция, отправляющая в компоненту App данные о новом человеке
    const setNewWorker = () => {
        if (newName !== "" && newLastName !== "") {
            addNewWorker({newName, newLastName, newDepartment})
            SetNewName('')
            SetNewLastName('')
            SetNewDepartment('')
        } else {
            setOpen(true);
        }
    }

    const classes = useStyles();

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen} startIcon={<AccessibilityNewIcon/>}
                    className={classes.button}>
                Добавить
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Введите данные:</DialogTitle>
                <DialogContent>
                    <TextField
                        onChange={(e) => SetNewName(e.target.value)}
                        value={newName}
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Имя"
                        type="text"
                        fullWidth
                    />
                    <TextField
                        onChange={e => SetNewLastName(e.target.value)}
                        value={newLastName}
                        autoFocus
                        margin="dense"
                        id="lastName"
                        label="Фамилия"
                        type="text"
                        fullWidth
                    />
                    <TextField
                        onChange={e => SetNewDepartment(e.target.value)}
                        value={newDepartment}
                        autoFocus
                        margin="dense"
                        id="department"
                        label="Отдел"
                        type="text"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Закрыть
                    </Button>
                    <Button onClick={() => {
                        handleClose();
                        setNewWorker()
                    }} color="primary">
                        Добавить
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}