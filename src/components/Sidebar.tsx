import React from "react";
import { Navigation } from "react-minimal-side-navigation";
import { useHistory, useLocation } from "react-router-dom";
import { Col } from "react-bootstrap";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";

export function Sidebar(): JSX.Element {
    const history = useHistory();
    return (
        <Col>
            <Navigation
                activeItemId="/placeholder2/placeholder3"
                onSelect={({itemId}) => {
                    history.push(itemId);
                }}
                items={[
                    {
                        title: "placeholder",
                        itemId: "/placeholder"
                    },
                    {
                        title: "placeholder",
                        itemId: "/placeholder2",
                        subNav: [
                            {
                                title: "placeholder",
                                itemId: "/placeholder2/placeholder3",
                            },
                            {
                                title: "placeholder",
                                itemId: "/placeholder2/placeholder4",
                            },
                        ],
                    },
                    {
                        title: "placeholder",
                        itemId: "/placeholder5",
                        subNav: [
                            {
                                title: "placeholder",
                                itemId: "/placeholder5/placeholder6",
                            },
                        ],
                    },
                ]}
            />
        </Col>
    );
}