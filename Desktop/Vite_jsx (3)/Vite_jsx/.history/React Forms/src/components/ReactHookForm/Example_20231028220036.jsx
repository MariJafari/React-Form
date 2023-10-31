import { useForm } from 'react-hook-form’; 
function LoginForm() { 
const { register, handleSubmit, formState: { errors } } = useForm(); 
const onSubmit = (data) => {
 console.log(data); 
};
 return ( 
<form onSubmit={handleSubmit(onSubmit)}>
 <label>Email</label> 
<input type="email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} /> 
{errors.email && <p>Email is required and must be valid</p>}