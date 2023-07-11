import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import EditUsers from './EditUsers';
import EditProducts from './EditProducts';
import BookAdd from './BookAdd';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}



export default function PageAdmin() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

  return (
    <Box sx={{ flexGrow: 1,maxWidth:"1200px",margin: "auto", marginTop:5, backgroundColor:"#fff",padding:5,alignItems:"center",display:'flex',flexDirection:"column" }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Editar Livros" {...a11yProps(0)} />
            <Tab label="Adicionar Livro" {...a11yProps(1)} />
            <Tab label="Editar Usuários" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>{<EditProducts/>}</TabPanel>
        <TabPanel value={value} index={1}>{<BookAdd/>}</TabPanel>
        <TabPanel value={value} index={2}>{<EditUsers/>}</TabPanel>
    </Box>
  );
}
