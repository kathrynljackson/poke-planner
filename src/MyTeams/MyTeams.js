import './MyTeams.scss';
import { PropTypes } from 'prop-types';

export default function MyTeams(props) {
    console.log('PROPS', props)


   
    if(props.myTeams.length < 0){
        return (
            <p>You have no teams planned. Create one below.</p>
        )
    } else {
        return (
    
    <div className='my-teams'>
       
        <p></p>
        <section className='my-teams-main'>
        <p className='my-teams-title'>Your Teams</p>
            {props.myTeams.map((set) => {
                return (
                    <div key={set.id} className={`each-team ${set.opponent.type}`}>
                        <p className='team-gym'>{set.opponent.gym}</p>
                       <img className='team-image' src={set.opponent.image} /> 
                       {set.team.map((pokemon) => {
                           return <ul className='team-monsters' key={pokemon.key}>{pokemon.key}</ul>
                       })}
                    </div>
                )
            })
            }
        </section>
    </div>
   ) 
    }
}

MyTeams.proptype = {
    myTeams: PropTypes.array
}