# DS_frontent
Frontend do strony Diakonii Słowa Diecezji Warszawsko-Praskiej

## Strony do podejrzenia:
- [Strona główna](https://barpotroszek.github.io/DS_frontent/index.html)
- [Szczegóły książki](https://barpotroszek.github.io/DS_frontent/details.html)
- [Koszyk](https://barpotroszek.github.io/DS_frontent/basket.html)
- [Składanie zamówienia](https://barpotroszek.github.io/DS_frontent/submit_order.html)

### sekcja dla sprzedawcy
- [Lista zamówień](https://barpotroszek.github.io/DS_frontent/orders_list.html)
- [Szczegóły zamówienia](https://barpotroszek.github.io/DS_frontent/order_details.html)
- [Dodawanie/aktualizowanie artykułu](https://barpotroszek.github.io/DS_frontent/create_item.html)


## Przykładowe/wymyślone rozwiązania:
### Zgłaszanie zamówienia
Potencjalny klient wybiera konkretne artykuły czy to ze strony głównej, czy wyszukiwarki. Wchodzi w stronę danej książki (przykładowy URL `https://domena.pl/details?id=43254`, gdzie id jest odnośnikiem do bazy danych, odpowiada konkretnej książce). Wchodzi następnie w koszyk i tam potwierdza wybrane pozycje klikając w poniższy przycisk. W następnym kroku podaje swoje dane i ew. dane osoby upoważnionej do odbioru. Wysyła swoje zgłoszenie wybierając przycisk "**Złóż zamówienie**"

### Przygotowanie zamówienia
Sprzedawca wybiera zamówienie(domyślnie będzie sortowane po statusie i dacie zgłoszenia, prawdopodobnie jego numer będzie zawierał tą datę). Przechodzi dalej w szczegóły zamówienia (przykładowy URL: `https://domena.pl/order_details`) i tam po kolei "odhacza" każdą pozycję, którą zebrano do zamówienia. Po skompletowaniu wszystkich książek uaktywni się przycisk "Powiadom odbiorcę". Po jego wybraniu status zamówienia się zmieni, przycisk "Wydaj zamówienie" zostanie odblokowany. Po jego naciśnięciu zamówienie zostanie oznaczone jako "wydane".




## TODOs
- [ ] Wyszukiwanie książek
- [ ] Zaprojektować/przenieść bazę danych
- [ ] **[order_details.html]** Aktywowanie przycisków w zależności od stanu zrealizowania zamówienia.