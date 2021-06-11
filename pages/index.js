import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [{
        id: "m1",
        title: "A First Meetup",
        image: "https://images.unsplash.com/photo-1558536219-f17a76e52621?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1028&q=80",
        address: "Some Address 5, 124 Ds City",
        description: "This is a first meetup!",
    },
    {
        id: "m2",
        title: "A Second Meetup",
        image: "https://images.unsplash.com/photo-1558536219-f17a76e52621?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1028&q=80",
        address: "Some Address 5, 124 Ds City",
        description: "This is a second meetup!",
    },
];

function HomePage(props) {
    // useEffect runs after component runs
    // useEffect(() => {
    //     // send a http request and fetch data
    //     setLoadedMeetups(DUMMY_MEETUPS);
    // }, [])
    return <MeetupList meetups = { props.meetups }
    />;
}

export async function getStaticProps() {
    // never execute in the client side
    // build on the server
    // can do fetch data from API
    return {
        props: {
            meetups: DUMMY_MEETUPS
        },
        revalidate: 1
    };
}

export default HomePage;