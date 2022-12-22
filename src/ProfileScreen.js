import Box from '@mui/material/Box';
import { useEffect, useContext, useState } from "react";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import UserContext from "./UserContext.js";
import { Avatar, FormControl, TextField } from '@mui/material';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Redirect, Route } from 'react-router-dom';

function ProfileScreen() {

 



   const borderRadius= {
    "border-radius": "50%",
    "left": "22%"
   }

  const [userDetails, setUserDetails] = useState();



    // The states are: 
    // (1) null, (2) "client error", (3) "loading", (4) "backend error", (5) "success"
    var [formState, setFormState] = useState(null);
    var [errorsState, setErrorsState] = useState([]);


    // 1. Declare variables (not defined)
    var firstNameField;
    var lastNameField;
    var emailField;
    var passwordField;
    var avatarField;

     
    // Create a JS object like an HTML form element 
    var formData = new FormData();

    function attachFile(evt) {

        console.log('file data', evt.target.files)
        // Creating an array from the files attached by user
        var files = Array.from(evt.target.files);

        files.forEach(
            function(fileAttachment, index) {
                formData.append(index, fileAttachment);
            }
        )
    }


    function updateHandler() {


        // 2. Validate the fields
        var errors = [];

        if(firstNameField.value.length === 0) {
            errors.push('Please enter your first name');
        }

        if(lastNameField.value.length === 0) {
            errors.push('Please enter your last name');
        }

        if(emailField.value.length === 0) {
            errors.push('Please enter your email');
        }

        if(passwordField.value.length === 0) {
            errors.push('Please enter your password');
        }

        // 3. If any field is not validated, go to "client error"
        if( errors.length > 0 ) {
            setFormState("client error");
            setErrorsState( errors );
        }

        // 4. If all fields are valid
        else {
            // 5. Go to "loading"
            setFormState("loading");
            setErrorsState([]);

            // 6. Send data backend
            formData.append('firstName', firstNameField.value);
            formData.append('lastName', lastNameField.value);
            formData.append('email', emailField.value);
            formData.append('password', passwordField.value);
            formData.append('avatar', avatarField.value);

            fetch(
                `${process.env.REACT_APP_BACKEND_ENDPOINT}/users/update`,
                {
                    'method': 'PUT',
                    'body': formData,
                    headers: {
                      Authorization: `Bearer ${localStorage.getItem("jsonwebtoken")}`
                }
              }
            )
            .then(
                function(backendResponse) {
                    // Convert the HTTP string response to JSON
                    return backendResponse.json();
                }
            )
            .then(
                // 7. If backend sends success, go to "success"
                function(jsonResponse) {
                    if(jsonResponse.status === "ok") {
                        console.log('backend response /users/update', jsonResponse)
                        setFormState("success");
                    }
                    else {
                        setFormState("backend error");
                        setErrorsState([jsonResponse.message]);
                    }
                }
            )
            .catch(
                // 8. If backends sends error, go to "backend error"
                function(backendError) {
                    console.log('backendError at /users/update', backendError)
                    setFormState("backend error");
                }
            )
        }
    }

    function addListItem(str) {
        return <li>{str}</li>
    }





  useEffect(
    function () {
      fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/users/find`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jsonwebtoken")}`,
        },
        // 'body': {}
      })
        // This will recieve string data and convert to json
        .then(function (backendReponse) {
          return backendReponse.json();
        })
        // This will receie the converted json
        .then(function (jsonResponse) {
          setUserDetails(jsonResponse);
        })
        // This will catch errors if any
        .catch(function (backendError) {
          console.log("backendError", backendError);
        });
    },

    // This array is empty because useEffect will run once only
    []
  );

  if (userDetails) {

  const User = userDetails.firstName+" "+userDetails.lastName;

    return (

      <Container maxWidth="sm">
      
            <Box pt={5} >
                <Typography component="text" fontSize="36px">
                    Welcome {User}
                </Typography>
            </Box>

            <Box pt={5}> 
           
      
       <Avatar src={userDetails.avatar} style={borderRadius} alt="profile" sx={{ width: 300, height:300 }}/>
  
            </Box>

            <Box mt={4} mb={2}>
                <FormControl fullWidth sx={ { mb: 2 } }>
                    <TextField 
                    inputRef={ 
                        function( thisElement ){
                            firstNameField = thisElement;
                        } 
                    }
                    label="First Name" required={true}/>
                </FormControl>

                <FormControl fullWidth sx={{ mb: 2 }}>
                   <TextField 
                   inputRef={ 
                        function( thisElement ){
                            lastNameField = thisElement;
                        } 
                    }
                   label="Last Name" required={true}/>
                </FormControl>

                <FormControl fullWidth sx={{ mb: 2 }}>
                    <TextField 
                    inputRef={ 
                        function( thisElement ){
                            emailField = thisElement;
                        } 
                    }
                    label="Email Address" required={false}/>
                </FormControl>

                <FormControl fullWidth sx={{ mb: 2 }}>
                    <TextField 
                    inputRef={ 
                        function( thisElement ){
                            passwordField = thisElement;
                        } 
                    }
                    type="password"
                    label="Password" required={true}  />
                </FormControl>
            </Box>

            <Box mt={4} mb={4}>

                <Typography component="p" variant="body1" gutterBottom>
                    Update your profile picture (optional)
                </Typography>

                <br/>

                <Button size="small" variant="contained" component="label">
                    Upload
                    <input 
                        ref={function(thisElement){ avatarField = thisElement }} 
                        onClick={attachFile}
                        onChange={attachFile}
                        accept="image" 
                        multiple type="file" 
                    />
                </Button>

            </Box>


            <Box display="flex">
                
                {
                    formState !== "loading" &&
                    <Button onClick={updateHandler} size="large" variant="contained">Update profile</Button>
                }
                
                {
                    formState === "loading" &&
                    <CircularProgress />
                }
            </Box>

            <Box mt={2}>

                { 
                    formState === "client error" &&
                    <Alert severity="error">
                        <ul>
                        {
                            errorsState.map(addListItem)
                        }
                        </ul>
                    </Alert>
                }

                { 
                    formState === "backend error" &&
                    <Alert severity="error">
                        <ul>
                        {
                            errorsState.map(addListItem)
                        }
                        </ul>
                    </Alert>
                }

                {
                    formState === "success" &&
                    <Alert severity="success">
                        You have registered successfully!
                    </Alert>
                }
            </Box>
        </Container>
    );
  } else {
    return <p>Loading...</p>;
  }
}

export default ProfileScreen;