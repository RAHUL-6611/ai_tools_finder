import React from 'react';
import {Stack, Typography,AppBar,Toolbar,Button,TextField} from '@mui/material'

const Header = () => {
  return (
    <Stack sx={{alignItems:'center'}}>
      <AppBar sx={{ backgroundColor: 'transparent',alignItems:'center'}} elevation={0} >
        <Toolbar sx={{justifyContent:'end',width:{md:1024,sm:800,xs:300}}} >
          <Button sx={{ color: '#fff',fontWeight:'bold' }}>Log In</Button>
          <Button sx={{color:'#fff',fontWeight:'bold'}}>Add You AI</Button>
          <Button sx={{color:'#fff',fontWeight:'bold'}}>Discord</Button>
        </Toolbar>
        
      </AppBar>
     <Stack sx={{mt:10}}>
        <Typography className='text' sx={{fontSize: {md:60,sm:50,xs:40}, fontWeight: 'bold' }}>AI Tools Finder</Typography>
        <Typography sx={{color:'#fff',fontSize:{md:20,sm:18,xs:15}}}>Discover the AI tool that fits your needs - Enhance your <br/> workflow with the power of AI</Typography>
    </Stack>
      <Stack sx={{mt:4,flexDirection:"row",backgroundColor: '#fff',p:1,borderRadius:2}}>
              <TextField variant='outlined' sx={{ borderRadius: 2, width: { md: 350, sm: 300, xs: 250 } }} />   
        <Button variant='contained' sx={{ml:1}}>Search</Button>
    </Stack>
    </Stack>
  )
}

export default Header