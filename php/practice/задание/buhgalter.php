<style>
    form {
        width: 500px;
        height: 500px;
        border: 1px solid black;
        margin: 0 auto;
        padding: 40px;
    }
    .select {
        display: flex;
        margin: 0 auto;
        width: 300px;

    }
    .submit {
        width: 100px;
        height: 40px;
        display: block;
        margin: 0 auto;
        margin-top: 20px;
    }
</style>
<form action="table.php" method="post">
    <div class="select">
        <select name="Вид">
            <option>Доход</option>
            <option>Расход</option>
        </select>
        <input name="comment" type="text" placeholder="коммент">
        <select name="Валюта">
            <option>руб</option>
            <option>доллар</option>
            <option>евро</option>
        </select>
    </div>
    <input class="submit"  type="submit" value="Занести">
</form>