import CustomImage from "./CostomImage";
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


export default function RecipeCard({recipe}){
    const {recipeObj}=recipe;
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return(
        <div className="recipe-card">
            <CustomImage imgSrc={recipe.image} pt="65%"/>
            <div className="recipe-card-info">
                <p className="recipe-title"> {recipe.label}</p>
                <Button className= "button ingredients" onClick={handleClickOpen}>
                    Ingredients
                </Button>
                <Dialog
                    open={open}
                    onClose={handleClose}
                   // aria-labelledby="alert-dialog-title"
                    //aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                            Ingredients
                    </DialogTitle>
                    <DialogContent>
                        <table>
                            <thead>
                                <th>Ingredients</th>
                                <th>Weight</th>
                            </thead>  
                            <tbody>
                            {recipe.ingredients.map((inrg)=>(
                                <tr>
                                    <td>{inrg.text}</td>
                                    <td>{inrg.weight}</td>
                                </tr>

                            ))}
                            

                            </tbody>
                        </table>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
        
                    </DialogActions>
                </Dialog>
                <Button onClick={()=>window.open(recipe.url)} className="button view-recipe">view recipe</Button>
            </div>
        </div>
    )
}