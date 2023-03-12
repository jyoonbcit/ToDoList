function NewTaskForm() {
    return
    <form className={classes.form}>
        <div className={classes.control}>
            <label htmlFor='title'>Task Title</label>
            <input type='text' required id='title' />
        </div>
    </form>
}

export default NewTaskForm;