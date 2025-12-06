function Profile(){
    return (
        <div>
            <h1>Profile Card Challenge</h1>
            <ProfileCard
            name="Alice"
            age={30}
            greeting={
                <div>
                    <strong>Hi Ram, Have a good day :</strong>
                </div>
            }>
            <p>Hobbies : Reading ,Hiking</p>
            <button>Contact Me</button>
            </ProfileCard>

            
            <ProfileCard
            name="Bob"
            age={20}
            greeting={
                <div>
                    <strong>Hi bob, Have a good day :</strong>
                </div>
            }>
            <p>Hobbies : Reading ,Hiking</p>
            <button>Contact Me</button>
            </ProfileCard>
        </div>
    )

}
export default Profile;

function ProfileCard(props){
    return(
        <>
        <h1>Name : {props.name}</h1>
        <p>Age : {props.age}</p>
        <p>{props.greeting}</p>
        <div>{props.children}</div>
        </>
    )
}