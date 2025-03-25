import tkinter as tk

def popup():
    window = tk.Tk()
    window.title("Teste EXE")
    tk.Label(window, text="Executável rodando!").pack(pady=20)
    tk.Button(window, text="Fechar", command=window.destroy).pack(pady=10)
    window.mainloop()

popup()
