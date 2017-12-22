var Button = ReactBootstrap.Button
var ButtonToolbar = ReactBootstrap.ButtonToolbar
var Panel = ReactBootstrap.Panel
var Accordion = ReactBootstrap.Accordion
var Modal = ReactBootstrap.Modal
var Input = ReactBootstrap.Input

var RecipeBox = React.createClass({
  getInitialState: function() {
    if (!localStorage.recipes) {
      localStorage.recipes = JSON.stringify([
        {
          name: "Pumpkin Pie",
          ingredients: [
            "Pumpkin Puree",
            "Sweetened Condensed Milk",
            "Eggs",
            "Pumpkin Pie Spice",
            "Pie Crust",
          ],
        },
        {
          name: "Spaghetti",
          ingredients: ["Noodles", "Tomato Sauce", "(Optional) Meatballs"],
        },
      ])
    }
    return {
      data: JSON.parse(localStorage.recipes),
      showModal: false,
      recipename: "",
      ingredients: "",
    }
  },

  close() {
    this.setState({ showModal: false, recipename: "", ingredients: "" })
  },

  open() {
    this.setState({ showModal: true })
  },

  addRecipe() {
    var recipes = JSON.parse(localStorage.recipes)
    var recipeName = this.state.recipename
    var ingredients = this.state.ingredients.split(",")
    recipes.push({ name: recipeName, ingredients: ingredients })
    localStorage.recipes = JSON.stringify(recipes)
    this.setState({
      showModal: false,
      data: recipes,
      recipename: "",
      ingredients: "",
    })
  },
  handleRecipeNameChange: function(e) {
    this.setState({ recipename: e.target.value })
  },
  handleIngredientsChange: function(e) {
    this.setState({ ingredients: e.target.value })
  },

  handleDeleteRecipe: function() {
    this.setState({
      data: JSON.parse(localStorage.recipes),
      showModal: false,
      recipename: "",
      ingredients: "",
    })
  },
  render: function() {
    var self = this
    var recipeNodes = this.state.data.map(function(d, i) {
      return (
        <Panel header={d.name} key={i} eventKey={i} bsStyle="warning">
          <Recipe recipe={d} onDeleteRecipe={self.handleDeleteRecipe} key={i} />
        </Panel>
      )
    })
    return (
      <div>
        <h2>My Recipe Box</h2>
        <Button bsStyle="primary" bsSize="large" onClick={this.open}>
          Add Recipe
        </Button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Add Recipe</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Input
              type="text"
              value={this.state.recipename}
              placeholder="Recipe name"
              label="Recipe"
              groupClassName="group-class"
              labelClassName="label-class"
              onChange={this.handleRecipeNameChange}
            />
            <Input
              type="text"
              value={this.state.ingredients}
              placeholder="Enter ingredients, separated , by commas"
              label="Ingredients"
              hasFeedback
              groupClassName="group-class"
              labelClassName="label-class"
              onChange={this.handleIngredientsChange}
            />
          </Modal.Body>
          <Modal.Footer>
            <ButtonToolbar>
              <Button bsStyle="primary" onClick={this.addRecipe}>
                Add Recipe
              </Button>
              <Button bsStyle="default" onClick={this.close}>
                Close
              </Button>
            </ButtonToolbar>
          </Modal.Footer>
        </Modal>
        <Accordion>{recipeNodes}</Accordion>
      </div>
    )
  },
})

var Recipe = React.createClass({
  getInitialState: function() {
    return {
      showModal: false,
      recipename: this.props.recipe.name,
      ingredients: this.props.recipe.ingredients,
    }
  },
  close() {
    this.setState({ showModal: false })
  },

  open() {
    this.setState({
      showModal: true,
      tmp_recipename: this.state.recipename,
      tmp_ingredients: this.state.ingredients,
    })
  },

  editRecipe: function() {
    var recipes = JSON.parse(localStorage.recipes)
    var self = this
    recipes.forEach(function(r) {
      if (r.name == self.state.recipename) {
        r.name = self.state.tmp_recipename
        r.ingredients = self.state.tmp_ingredients
      }
    })
    localStorage.recipes = JSON.stringify(recipes)
    this.setState({
      showModal: false,
      recipename: this.state.tmp_recipename,
      ingredients: this.state.tmp_ingredients,
    })
  },

  deleteRecipe: function() {
    var recipes = JSON.parse(localStorage.recipes)
    var self = this
    var updatedRecipes = recipes.filter(function(r) {
      return r.name !== self.state.recipename
    })
    localStorage.recipes = JSON.stringify(updatedRecipes)
    this.props.onDeleteRecipe()
  },

  handleRecipeNameChange: function(e) {
    this.setState({ tmp_recipename: e.target.value })
  },

  handleIngredientsChange: function(e) {
    this.setState({ tmp_ingredients: e.target.value.split(",") })
  },

  render: function() {
    var listGroup = this.state.ingredients.map(function(d, i) {
      return (
        <li className="list-group-item" key={i}>
          {d}
        </li>
      )
    })
    return (
      <div>
        <h3 className="text-center">Ingredients</h3>
        <hr />
        <ul className="list-group">{listGroup}</ul>
        <ButtonToolbar>
          <Button bsStyle="danger" onClick={this.deleteRecipe}>
            Delete
          </Button>
          <Button bsStyle="primary" onClick={this.open}>
            Edit
          </Button>
        </ButtonToolbar>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Recipe</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Input
              type="text"
              value={this.state.tmp_recipename}
              placeholder="Recipe name"
              label="Recipe"
              //help="Validation is based on string length."
              hasFeedback
              ref="input"
              groupClassName="group-class"
              labelClassName="label-class"
              onChange={this.handleRecipeNameChange}
            />
            <Input
              type="text"
              value={this.state.tmp_ingredients}
              placeholder="Enter ingredients, separated , by commas"
              label="Ingredients"
              //help="Validation is based on string length."
              hasFeedback
              ref="input"
              groupClassName="group-class"
              labelClassName="label-class"
              onChange={this.handleIngredientsChange}
            />
          </Modal.Body>
          <Modal.Footer>
            <ButtonToolbar>
              <Button bsStyle="primary" onClick={this.editRecipe}>
                Edit Recipe
              </Button>
              <Button bsStyle="default" onClick={this.close}>
                Close
              </Button>
            </ButtonToolbar>
          </Modal.Footer>
        </Modal>
      </div>
    )
  },
})

ReactDOM.render(<RecipeBox />, document.getElementById("content"))

