запретить пользователю выделять текст и вызывать контекстное меню
document.oncontextmenu = () => false;
document.onselectstart = () => false;
