import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className="container">
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
// import React, { useState, useEffect } from "react";
// import { v4 as uuidv4 } from "uuid";

// // Components
// import Event from "../../Components/Event/event.js";
// import UserLeftSide from "../../Components/userLeftSide/userLeftSide.js";

// // Material Ui
// import Card from "../../MaterialUi/Card/card.js";

// // Styling
// import style from "./events.module.css";

// // User Context
// import { useUserContext } from "../../Context/userContext";

// function GetAllEvents() {
//   // Importing user data
//   const [user] = useUserContext();

//   const [allEvents, setAllEvents] = useState([]);
//   const [attendingList, setAttendingList] = useState([]);

//   /*---------------Add to Attend Patch----------------*/
//   let addToAttend = (id, arr) => {
//     console.log(id, arr);
//     fetch(`https://falcon5ives.herokuapp.com/events/${id}`, {
//       method: "PATCH",
//       body: JSON.stringify({ attendingList: arr }),
//       headers: { "Content-Type": "application/json" },
//     })
//       .then((res) => res.json())
//       .then((data) => console.log(data))
//       .catch((error) => console.log(error));
//   };

//   async function get() {
//     let res = await fetch("https://falcon5ives.herokuapp.com/events");
//     let data = await res.json();
//     console.log(data);
//     setAllEvents(data.payload);
//   }

//   useEffect(() => {
//     get();
//   }, []);

//   useEffect(() => {
//     setInterval(() => {
//       get();
//     }, 300000);
//   }, []);

//   return (
//     <div>
//       {user && (
//         <div className={style.row}>
//           <UserLeftSide />
//           <div className="container">
//             <div className="column1">
//               <section className="columnTwo">
//                 <div className="welcome">
//                   <h3>Hello {user?.username}</h3>
//                   <h4>Here are the current planned events</h4>
//                 </div>
//                 <button onClick={() => console.log(allEvents)}>log</button>
//                 <p>Get All Events</p>
//                 <button>Create Event</button>
//                 <button>My Events</button>

//                 <section className="base">
//                   <h3>Education</h3>
//                   {allEvents.map((item, index) => {
//                     if (item.eventtype === "education") {
//                       let date = new Date(item.date).toDateString();
//                       return (
//                         <Card
//                           key={uuidv4()}
//                           date={date}
//                           setAttending={setAttendingList}
//                           addToAttend={addToAttend}
//                           item={item}
//                         />
//                       );
//                     }
//                   })}
//                 </section>

//                 <section className="base">
//                   <h3>Social</h3>
//                   {allEvents.map((item, index) => {
//                     if (item.eventtype === "social") {
//                       let date = new Date(item.date).toDateString();
//                       return (
//                         <Card
//                           key={uuidv4()}
//                           date={date}
//                           setAttending={setAttendingList}
//                           addToAttend={addToAttend}
//                           item={item}
//                         />
//                       );
//                     }
//                   })}
//                 </section>

//                 <section className="base">
//                   <h3>Community</h3>
//                   {allEvents.map((item, index) => {
//                     if (item.eventtype === "community") {
//                       let date = new Date(item.date).toDateString();
//                       return (
//                         <Card
//                           key={uuidv4()}
//                           date={date}
//                           setAttending={setAttendingList}
//                           addToAttend={addToAttend}
//                           item={item}
//                         />
//                       );
//                     }
//                   })}
//                 </section>
//               </section>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default GetAllEvents;
