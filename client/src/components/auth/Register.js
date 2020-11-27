import React from 'react'

import PropTypes from 'prop-types'

import {connect} from 'react-redux'
import {registeruser} from '../../action/authAction'
import {withRouter} from 'react-router-dom'
import TextFieldGroup from '../common/TextFieldGroup'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'

class Register extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:'',
            email:'',
            password:'',
            password2:'',
            mobile:'',
            role:'',
            errors:{}
        }
    }
    componentDidMount(){
      if(this.props.auth.isAuthenticated){
        this.props.history.push('/dashboard')
      }
    }
    componentWillReceiveProps(nextProps){
      if(nextProps.errors){
        this.setState({errors:nextProps.errors})
      }
    }
    onChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    onSubmit=(e)=>{
        e.preventDefault()
        const formData={
            name:this.state.name,
            email:this.state.email,
            password:this.state.password,
            password2:this.state.password2,
            mobile:this.state.mobile,
            role:this.state.role
        }
        console.log(formData)
        this.props.registeruser(formData,this.props.history)
       
    }
    render(){
        const {errors} =this.state;
         
        return(
            <div className="register">
            
            <div className="container">
              <div className="row">
                <div className="col-md-8 m-auto">
                  <h1 className="display-4 text-center">Sign Up</h1>
                  <p className="lead text-center">Create your  account</p>

                  <form noValidate onSubmit={this.onSubmit}>
                  <TextFieldGroup
                    type="name" 
                    placeholder="Name" 
                    name="name"
                    value={this.state.name} 
                    onChange={this.onChange}
                    error={errors.name}
                   />
                 <TextFieldGroup
                         type="email" 
                         placeholder="Email Address" 
                         name="email" 
                         value={this.state.email}
                         onChange={this.onChange}
                         error={errors.email}
                         info="This site uses Gravatar so if you want a profile image use a Gravator email"
                    />
                    <TextFieldGroup
                    type="password" 
                    placeholder="Password" 
                    name="password"
                    value={this.state.password} 
                    onChange={this.onChange}
                    error={errors.password}
                   />
                    
                    <TextFieldGroup
                    type="password" 
                    placeholder="Confirm Password" 
                    name="password2"
                    value={this.state.password2} 
                    onChange={this.onChange}
                    error={errors.password2}
                   />
                    <TextFieldGroup
                    type="mobile" 
                    placeholder="Enter your Mobile" 
                    name="mobile"
                    value={this.state.mobile} 
                    onChange={this.onChange}
                    error={errors.mobile}
                   />

                    <TextField id="select" label="role" value=" " select>
                      <MenuItem value="01">Agent</MenuItem>
                      <MenuItem value="02">Customer</MenuItem>

                    </TextField>
                    <input type="submit" className="btn btn-info btn-block mt-4" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        )
    }
}
Register.propTypes={
  registeruser:PropTypes.func.isRequired,
  auth:PropTypes.object.isRequired,
  errors:PropTypes.object.isRequired
}
const mapStateToProps=(state)=>({
  auth:state.auth,
  errors:state.errors
})
export default connect(mapStateToProps,{registeruser})(withRouter(Register))


// import React, { Fragment, useState } from 'react';
// import { connect } from 'react-redux';
// import { Link, Redirect } from 'react-router-dom';
// // import { setAlert } from '../../actions/alert';
// import { registeruser} from '../../action/authAction';
// import PropTypes from 'prop-types';

// const Register = ({ setAlert, register, isAuthenticated }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     password2: '',
//     role:'',
//     mobile:''
//   });

//   const { name, email, password, password2 } = formData;

//   const onChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     if (password !== password2) {
//       setAlert('Passwords do not match', 'danger');
//     } else {
//       register({ name, email, password });
//     }
//   };

//   if (isAuthenticated) {
//     return <Redirect to="/dashboard" />;
//   }

//   return (
//     <Fragment>
//       <h1 className="large text-primary">Sign Up</h1>
//       <p className="lead">
//         <i className="fas fa-user" /> Create Your Account
//       </p>
//       <form className="form" onSubmit={onSubmit}>
//         <div className="form-group">
//           <input
//             type="text"
//             placeholder="Name"
//             name="name"
//             value={name}
//             onChange={onChange}
//           />
//         </div>
//         <div className="form-group">
//           <input
//             type="email"
//             placeholder="Email Address"
//             name="email"
//             value={email}
//             onChange={onChange}
//           />
//           <small className="form-text">
//             This site uses Gravatar so if you want a profile image, use a
//             Gravatar email
//           </small>
//         </div>
//         <div className="form-group">
//           <input
//             type="password"
//             placeholder="Password"
//             name="password"
//             value={password}
//             onChange={onChange}
//           />
//         </div>
//         <div className="form-group">
//           <input
//             type="password"
//             placeholder="Confirm Password"
//             name="password2"
//             value={password2}
//             onChange={onChange}
//           />
//         </div>
//         <div className="form-group">
//           <input
//             type="mobile"
//             placeholder="enter MobileNumber"
//             name="mobile"
//             value={mobile}
//             onChange={onChange}
//           />
//         </div>

//         <input type="submit" className="btn btn-primary" value="Register" />
//       </form>
//       <p className="my-1">
//         Already have an account? <Link to="/login">Sign In</Link>
//       </p>
//     </Fragment>
//   );
// };

// Register.propTypes = {
//   setAlert: PropTypes.func.isRequired,
//   register: PropTypes.func.isRequired,
//   isAuthenticated: PropTypes.bool
// };

// const mapStateToProps = (state) => ({
//   isAuthenticated: state.auth.isAuthenticated
// });

// export default connect(mapStateToProps, { setAlert, registeruser })(Register);