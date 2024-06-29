function Profile(props){
let {src,alt,height, width, border} = props;

return(
    <>
   <img src={src} alt={alt} height={height} width={width} border={border}/>
    </>
 
)
}
export default Profile;