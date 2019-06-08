import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import AddIcon from "@material-ui/icons/Add";
import Styles from "@material-ui/core/styles";

const handleClick = () => {
    console.log("clicked on icon!");
};


export const AddButton = () => (
            <React.Fragment>
                <Tooltip title={"custom icon"}>
                    <IconButton className={Styles.iconButton} onClick={handleClick}>
                        <AddIcon className={Styles.deleteIcon} />
                    </IconButton>
                </Tooltip>
            </React.Fragment>
);
