import React, { Component } from 'react'
import { Collapse, CardBody, Card } from 'reactstrap';
import Link from 'next/link'

const menus = [
    {
        id: 1,
        title: 'Home',
        link: '/',
    },

    {
        id: 2,
        title: 'About',
        link: '/AboutPage',
    },

    {
        id: 3,
            title: 'Partnership',
            link: '/CasePage',
    },
    
    {
        id: 4,
            title: 'Resources',
            link: '/EventPage',
            submenu: [
                {
                    id: 41,
                    title: 'Health Policy',
                    link: '/HealthPolicy'
                },
                {
                    id: 42,
                    title: 'Housing Assistance',
                    link: '/HousingAssistance'
                },
                {
                    id: 43,
                    title: 'Legal Assistance',
                    link: '/LegalAssistance'
                }
            ]
    },
    {
        id: 7,
        title: 'Event',
        link: '/EventPage',
        submenu: [
            {
                id: 71,
                title: 'Event',
                link: '/EventPage'
            },
            {
                id: 75,
                title: 'News',
                link: '/NewsPage'
            }
        ]
    },

    {
        id: 5,
        title: 'Volunteer',
        link: '/VolunteerPage',
        submenu: [
            {
                id: 51,
                title: 'Volunteer',
                link: '/VolunteerPage'
            },
            {
                id: 52,
                title: 'Mentor',
                link: '/MentorPage'
            },
            {
                id: 53,
                title: 'Intern',
                link: '/InternPage'
            }
        ]
    },
    {
        id: 88,
        title: 'Contact',
        link: '/ContactPage',
    }
    
    
]


export default class MobileMenu extends Component {

    state = {
        isMenuShow: false,
        isOpen: 0,
    }

    menuHandler = () => {
        this.setState({
            isMenuShow: !this.state.isMenuShow
        })
    }

    setIsOpen = id => () => {
        this.setState({
            isOpen: id === this.state.isOpen ? 0 : id
        })
    }

    render() {

        const { isMenuShow, isOpen } = this.state;

        return (
            <div>
                <div className={`mobileMenu ${isMenuShow ? 'show' : ''}`}>
                    {/* <div className="clox" onClick={this.menuHandler}>Close Me</div> */}

                    <ul className="responsivemenu">
                        {menus.map(item => {
                            return (
                                <li key={item.id}>
                                    {item.submenu ? <p onClick={this.setIsOpen(item.id)}>
                                        {item.title}
                                        {item.submenu ? <i className="fa fa-angle-right" aria-hidden="true"></i> : ''}
                                    </p> : <Link href={item.link}>{item.title}</Link>}
                                    {item.submenu ?
                                    <Collapse isOpen={item.id === isOpen}>
                                        <Card>
                                            <CardBody>
                                                <ul>
                                                    {item.submenu.map(submenu => (
                                                        <li key={submenu.id}><Link className="active" href={submenu.link}>{submenu.title}</Link></li>
                                                    ))}
                                                </ul>
                                            </CardBody>
                                        </Card>
                                    </Collapse>
                                    : ''}
                                </li>
                            )
                        })}
                    </ul>

                </div>

                <div className="showmenu" onClick={this.menuHandler}><i className="fa fa-bars" aria-hidden="true"></i></div>
            </div>
        )
    }
}
