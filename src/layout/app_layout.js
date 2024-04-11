import { Container, Paper } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';


const AppLayout= () => {
    return (
        <>
            {/* <AppHeader /> */}

            <Container className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:bg-gray-50 bg-primary-50 py-1">

                <Paper
                    elevation={1}
                    sx={{
                        padding: 4,
                        margin: 3,
                        marginTop: 1,
                        minHeight: '70vh',
                    }}
                >
                    <Outlet />
                </Paper>

                {/* <CopyrightFooter /> */}
            </Container>
        </>
    );
};

export default AppLayout;
