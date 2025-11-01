
export default function NavItem(props){

    return(
        <>
            <div>
                <img src={props.image} alt={props.title} />
                <h2>{props.title}</h2>

            </div>             
        </>
    )
}