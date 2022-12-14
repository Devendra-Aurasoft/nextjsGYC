import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import index from '../Testimonials';
export default function Test({ data }) {
    console.log("Test Dat :--", data.NewsData.exams);
    const Course_1 = data.NewsData.exams.filter(item => item.course_type === "1");
    const Course_2 = data.NewsData.exams.filter(item => item.course_type === "2");
    console.log("result Course_1---", Course_1);
    console.log("result Course_2---", Course_2);
    // ===========
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        console.log("newValue", newValue, event);
        setValue(newValue);
    };

    // ============
    function TabPanel(props) {
        const { children, value, index, ...other } = props;
        console.log("Props --", props);
        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`vertical-tabpanel-${index}`}
                aria-labelledby={`vertical-tab-${index}`}
                {...other}
            >
                {value === index && props.children != "undefined" && (
                    <Box sx={{ p: 3 }}>
                        <Typography>course_name :- {children.course_name}</Typography>
                        <Typography>participating_institute :-{children.participating_institute}</Typography>
                        <Typography>conduct_by :- {children.conduct_by}</Typography>
                        <Typography>form_last_date :-{children.form_last_date}</Typography>
                        <Typography>issue_form_date :- {children.issue_form_date}</Typography>
                        <Typography>exam_name :-{children.exam_name}</Typography>
                    </Box>
                )}
            </div>
        );
    }
    return (
        <>
            <h3 className='heading'>Top Cities</h3>
            <Box sx={{ mx: 'auto', maxWidth: 1400, my: "-2", bgcolor: 'background.paper' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                >
                    {
                        data.NewsData.exams.map(item => {
                            return <Tab label={item.exam_name} />
                        })
                    }
                </Tabs>
            </Box>



            <Box
                sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
            >

                {
                    data.NewsData.exams.map((item, index) => {
                        console.log("tabpanel item", item);
                        return <TabPanel value={value} index={index}>
                            {item}
                        </TabPanel>
                    })
                }

                {/* <TabPanel value={value} index={0}>
                    Item One Devendra
                </TabPanel> */}
                {/* <TabPanel value={value} index={1}>
                    Item Two
                </TabPanel>
                <TabPanel value={value} index={2}>
                    Item Three
                </TabPanel>
                <TabPanel value={value} index={3}>
                    Item Four
                </TabPanel>
                <TabPanel value={value} index={4}>
                    Item Five
                </TabPanel>
                <TabPanel value={value} index={5}>
                    Item Six
                </TabPanel>
                <TabPanel value={value} index={6}>
                    Item Seven
                </TabPanel> */}
            </Box>



            {/* <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="Item One" value="1" />
                            <Tab label="Item Two" value="2" />
                            <Tab label="Item Three" value="3" />
                        </TabList>
                    </Box>
                    <TabPanel value="1">Item One</TabPanel>
                    <TabPanel value="2">Item Two</TabPanel>
                    <TabPanel value="3">Item Three</TabPanel>
                </TabContext>
            </Box> */}
        </>
    );
}