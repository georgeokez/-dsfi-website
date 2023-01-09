import React, { useEffect, useState, useRef } from "react";
import { Collapse, CardBody, Card } from "reactstrap";
import Link from "next/link";

const menus = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },

  {
    id: 2,
    title: "About",
    link: "/AboutPage",
  },

  {
    id: 3,
    title: "Partnership",
    link: "/Partnership",
  },

  {
    id: 4,
    title: "Our Team",
    link: "/TeamPage",
  },

  {
    id: 5,
    title: "Resources",
    link: "/HousingAssistance",
    submenu: [
      {
        id: 10,
        title: "Housing Assistance",
        link: "/HousingAssistance",
      },
      {
        id: 11,
        title: "Legal Assistance",
        link: "/LegalAssistance",
      },
    ],
  },

  {
    id: 6,
    title: "Volunteer",
    link: "/VolunteerPage",
    submenu: [
      {
        id: 12,
        title: "Volunteer",
        link: "/VolunteerPage",
      },
      {
        id: 13,
        title: "Mentor",
        link: "/Mentor",
      },
      {
        id: 14,
        title: "Intern",
        link: "/Intern",
      },
    ],
  },
  {
    id: 7,
    title: "Contact Us",
    link: "/ContactPage",
  },
];

const MobileMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(0);
  const containerRef = useRef();

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (
        showMenu &&
        containerRef.current &&
        !containerRef.current.contains(e.target)
      ) {
        setShowMenu((prevValue) => !prevValue);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [showMenu]);

  const handleShowMenu = () => {
    setShowMenu((prevValue) => !prevValue);
  };

  const handleIsOpen = (id) => () => {
    setIsOpen((prevValue) => {
      return id === prevValue ? 0 : id;
    });
  };

  return (
    <div ref={containerRef}>
      <div className={`mobileMenu ${showMenu ? "show" : ""}`}>
        <ul className="responsivemenu">
          {menus.map((item) => {
            return (
              <li key={item.id}>
                {item.submenu ? (
                  <p onClick={handleIsOpen(item.id)}>
                    {item.title}
                    {item.submenu ? (
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                    ) : (
                      ""
                    )}
                  </p>
                ) : (
                  <Link href={item.link}>{item.title}</Link>
                )}
                {item.submenu ? (
                  <Collapse isOpen={item.id === isOpen}>
                    <Card>
                      <CardBody>
                        <ul>
                          {item.submenu.map((submenu) => (
                            <li key={submenu.id}>
                              <Link className="active" href={submenu.link}>
                                {submenu.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </CardBody>
                    </Card>
                  </Collapse>
                ) : (
                  ""
                )}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="showmenu" onClick={handleShowMenu}>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>
    </div>
  );
};

export default MobileMenu;
