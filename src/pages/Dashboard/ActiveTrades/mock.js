export const getData = () => {
  function generateDatabaseDateTime(date) {
    return date.toISOString().replace("T", " ").substring(0, 19);
  }
  const data = [
    {
      trade_pair: 'USD/JPY',
      duration: '00:01:00',
      id: '6b3ad72b-5da3-4aa1-9e43-324317de8c6c',
      price_opening: Math.floor((Math.random() * (80 + 1)) + 400),
      time_opening: generateDatabaseDateTime(new Date(
        new Date(2012, 0, 1).getTime() +
        Math.random() *
        (new Date().getTime() - new Date(2012, 0, 1).getTime()))
      ),
      price_closing: Math.floor((Math.random() * (80 + 1)) + 400),
      time_closing: generateDatabaseDateTime(new Date(
        new Date(2012, 0, 1).getTime() +
        Math.random() *
        (new Date().getTime() - new Date(2012, 0, 1).getTime()))
      ),
      difference:
        Math.ceil(Math.random() * 99) * (Math.round(Math.random()) ? 1 : -1),

    },
    {
      trade_pair: 'USD/JPY',
      duration: '00:01:00',
      id: '6b3ad72b-5da3-4aa1-9e43-324317de8c6c',
      price_opening: Math.floor((Math.random() * (80 + 1)) + 400),
      time_opening: generateDatabaseDateTime(new Date(
        new Date(2012, 0, 1).getTime() +
        Math.random() *
        (new Date().getTime() - new Date(2012, 0, 1).getTime()))
      ),
      price_closing: Math.floor((Math.random() * (80 + 1)) + 400),
      time_closing: generateDatabaseDateTime(new Date(
        new Date(2012, 0, 1).getTime() +
        Math.random() *
        (new Date().getTime() - new Date(2012, 0, 1).getTime()))
      ),
      difference:
        Math.ceil(Math.random() * 99) * (Math.round(Math.random()) ? 1 : -1),

    },
    {
      trade_pair: 'USD/JPY',
      duration: '00:01:00',
      id: '6b3ad72b-5da3-4aa1-9e43-324317de8c6c',
      price_opening: Math.floor((Math.random() * (80 + 1)) + 400),
      time_opening: generateDatabaseDateTime(new Date(
        new Date(2012, 0, 1).getTime() +
        Math.random() *
        (new Date().getTime() - new Date(2012, 0, 1).getTime()))
      ),
      price_closing: Math.floor((Math.random() * (80 + 1)) + 400),
      time_closing: generateDatabaseDateTime(new Date(
        new Date(2012, 0, 1).getTime() +
        Math.random() *
        (new Date().getTime() - new Date(2012, 0, 1).getTime()))
      ),
      difference:
        Math.ceil(Math.random() * 99) * (Math.round(Math.random()) ? 1 : -1),

    },
    {
      trade_pair: 'USD/JPY',
      duration: '00:01:00',
      id: '6b3ad72b-5da3-4aa1-9e43-324317de8c6c',
      price_opening: Math.floor((Math.random() * (80 + 1)) + 400),
      time_opening: generateDatabaseDateTime(new Date(
        new Date(2012, 0, 1).getTime() +
        Math.random() *
        (new Date().getTime() - new Date(2012, 0, 1).getTime()))
      ),
      price_closing: Math.floor((Math.random() * (80 + 1)) + 400),
      time_closing: generateDatabaseDateTime(new Date(
        new Date(2012, 0, 1).getTime() +
        Math.random() *
        (new Date().getTime() - new Date(2012, 0, 1).getTime()))
      ),
      difference:
        Math.ceil(Math.random() * 99) * (Math.round(Math.random()) ? 1 : -1),

    },
    {
      trade_pair: 'USD/JPY',
      duration: '00:01:00',
      id: '6b3ad72b-5da3-4aa1-9e43-324317de8c6c',
      price_opening: Math.floor((Math.random() * (80 + 1)) + 400),
      time_opening: generateDatabaseDateTime(new Date(
        new Date(2012, 0, 1).getTime() +
        Math.random() *
        (new Date().getTime() - new Date(2012, 0, 1).getTime()))
      ),
      price_closing: Math.floor((Math.random() * (80 + 1)) + 400),
      time_closing: generateDatabaseDateTime(new Date(
        new Date(2012, 0, 1).getTime() +
        Math.random() *
        (new Date().getTime() - new Date(2012, 0, 1).getTime()))
      ),
      difference:
        Math.ceil(Math.random() * 99) * (Math.round(Math.random()) ? 1 : -1),

    },
    {
      trade_pair: 'USD/JPY',
      duration: '00:01:00',
      id: '6b3ad72b-5da3-4aa1-9e43-324317de8c6c',
      price_opening: Math.floor((Math.random() * (80 + 1)) + 400),
      time_opening: generateDatabaseDateTime(new Date(
        new Date(2012, 0, 1).getTime() +
        Math.random() *
        (new Date().getTime() - new Date(2012, 0, 1).getTime()))
      ),
      price_closing: Math.floor((Math.random() * (80 + 1)) + 400),
      time_closing: generateDatabaseDateTime(new Date(
        new Date(2012, 0, 1).getTime() +
        Math.random() *
        (new Date().getTime() - new Date(2012, 0, 1).getTime()))
      ),
      difference:
        Math.ceil(Math.random() * 99) * (Math.round(Math.random()) ? 1 : -1),

    }
  ];
  return [...data, ...data, ...data];
};