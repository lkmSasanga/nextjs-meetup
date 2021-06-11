import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
    return ( <
        MeetupDetail image = "https://images.unsplash.com/photo-1558536219-f17a76e52621?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1028&q=80"
        title = "First Meetup"
        address = "Some Street 5, Some City"
        description = "This is a first meetup" /
        >
    );
}

export async function getStaticPaths() {
    return {
        fallback: false,
        paths: [{
                params: {
                    meetupId: 'm1',
                },
            },
            {
                params: {
                    meetupId: 'm2',
                },
            },
        ]
    }
}

export async function getStaticProps(context) {
    // fetch data for a single meetup

    const meetupId = context.params.meetupId;

    console.log(meetupId);

    return {
        props: {
            meetupData: {
                image: "https://images.unsplash.com/photo-1558536219-f17a76e52621?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1028&q=80",
                id: meetupId,
                title: "First Meetup",
                address: "Some Street 5, Some City",
                description: "This is a first meetup"
            }
        }
    }

}

export default MeetupDetails;