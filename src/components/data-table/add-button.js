import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import AddIcon from "@material-ui/icons/Add";

const handleClick = () => {
    console.log("clicked on icon!");
};

export const AddButton = () => (
    <React.Fragment>
        <Tooltip title={"custom icon"}>
            <IconButton  onClick={handleClick}>
                <AddIcon />
            </IconButton>
        </Tooltip>
    </React.Fragment>
);
