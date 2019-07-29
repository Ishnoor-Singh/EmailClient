import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {styled} from '@material-ui/styles';
import theme from './theme';
import { Box } from '@material-ui/core';
import ProfilePic from './ProfilePic';

export default class Email extends Component {
    constructor(props){
        super(props);
        this.state={
            sender:"Name of Sender",
            content:"Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nullafacilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat actincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpaconsequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sedvulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. Ihendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et.",
            pinned:false,
            subject:"thus is the subject",
            cc:["first", "second"],
            bcc:["first", "third"]
        }
    }
    render() {
              return (
            <Container>
            <ExpansionPanel>
                  <ExpansionPanelSummary>
                       
                      <Box display = "flex" bcackgroundColor="red" flexDirection="row" justifyContent="center" alignItems="center">
                      <Container_Column order={0} paddingRight={5}>
                      <ProfilePic size="small" name = {this.state.sender} />
                      </Container_Column>
                  <Container_Column order={0} paddingRight={10}>
                    <Container_Heading>{this.state.sender}</Container_Heading>
                  </Container_Column>
                  {/* */}
                  <Container_Column flexGrow={1} paddingRight={10}>
                    <Container_SecHeading>{(this.state.subject + "...  " + this.state.content ).substring(0, 150) + "..."}</Container_SecHeading>
                  </Container_Column>
                  <Container_Column alignSelf="flex-end" order={3}>
                  <FormControlLabel
                control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} value="checkedH" />}
              />
                  </Container_Column>
                  </Box>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <div>
                    <Typography variant="caption">
                      {this.state.content}
                      <br />
                    </Typography>
                  </div>
                </ExpansionPanelDetails>
                <ExpansionPanelActions>
                  <Button size="small" color="primary" onClick = {this.props.toggleCompose}>
                    Reply
                  </Button>
                </ExpansionPanelActions>
              </ExpansionPanel>
            </Container>
          );
    }
}

const Container = styled('div') (
    {
        width : '100%'
    }
)

const Container_Heading = styled('Typography')(

{
  fontSize: theme.typography.pxToRem(15),
}

)

const Container_Column= styled(Box)(

  {
    // flexBasis: '33.33%',
  }
  
  )

  const Container_SecHeading= styled('Typography')(

    {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    }
    
    )
