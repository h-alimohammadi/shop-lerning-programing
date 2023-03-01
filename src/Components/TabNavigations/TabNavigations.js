import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
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
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
export default function TabNavigations({tabClass, tabs, contents ,orientationProp,displayProp }) {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%",display: displayProp,flexGrow: 1 }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          orientation={orientationProp && orientationProp}
          onChange={handleChange}
          aria-label="basic tabs example">
          {tabs.map((tab) => (
            <Tab className={`${tabClass && tabClass}`} label={tab} {...a11yProps(0)} style={{fontSize:'12px',fontFamily:'isans'}} />
          ))}
        </Tabs>
      </Box>
      {contents.map((content,index) => (
        <TabPanel value={value} index={index}>
          {content}
        </TabPanel>
      ))}
    </Box>
  );
}
