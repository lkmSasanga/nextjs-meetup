import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A First Meetup',
        image: 'https://images.unsplash.com/photo-1558536219-f17a76e52621?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1028&q=80',
        address: 'Some Address 5, 124 Ds City',
        description: 'This is a first meetup!'
    },
    {
        id: 'm2',
        title: 'A Second Meetup',
        image: 'https://images.unsplash.com/photo-1558536219-f17a76e52621?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1028&q=80',
        address: 'Some Address 5, 124 Ds City',
        description: 'This is a second meetup!'
    }
]

function HomePage() {
    return <MeetupList meetups={DUMMY_MEETUPS}/>
}

export default HomePage;