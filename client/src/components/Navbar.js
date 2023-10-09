import { React, useState } from 'react';
import {
    AppBar,
    Avatar,
    Box,
    Button,
    Container,
    Menu,
    MenuItem,
    Toolbar,
    Typography,
} from '@mui/material';

export function Navbar() {
    return (
        <AppBar position='static'>
            <Container maxWidth='xl'>
                <Toolbar disableGutters>
                    <Typography
                        variant='h4'
                        noWrap
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                          }}
                    >
                        Nick Williams
                    </Typography>
                
                </Toolbar>
            </Container>
        </AppBar>
    );
  }
  
  export default Navbar;
