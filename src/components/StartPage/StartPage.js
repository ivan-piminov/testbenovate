import React from "react";
import Box from "@material-ui/core/Box";
import Preloader from "../Preloader/Preloader";
import Grid from "@material-ui/core/Grid";
import {Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";


//стартовая страница приложения
export const StartPage = ({isLoading}) => {

    const useStyles = makeStyles({
        margin: {
            margin: '10%',
        },
        text:{
            textAlign: 'center'
        }
    });

    const classes = useStyles()

    //preloader при загрузке данных с сервера
    if (isLoading) {
        return <Preloader/>
    }

    return (
        <Grid container>
            <Grid item xs={12} lg={12}>
                <Box display="flex" justifyContent="center" className={classes.margin}>
                    <Box boxShadow={3} bgcolor="orange" p={1} className={classes.margin}>
                        <Typography className={classes.text}>
                            Привет!<br/>
                            Это небольшое приложение, которое позволяет загружать данные пользователей с сервера и
                            фильтровать их по
                            имени и фамилии. Также есть возможность разделить пользователей на группы.
                        </Typography>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    )
}