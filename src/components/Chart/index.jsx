import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import Chart from 'chart.js/auto';
import { useMode } from 'ModeContext';
import { ThreeDots } from 'react-loading-icons';
import Board from 'components/Board';
import { SpinningCircles } from 'react-loading-icons';
import { useTranslation } from 'react-i18next';
import BuyToken from './BuyToken';

const PriceChart = ({
  title,
  from,
  to,
  image_dark,
  image_light,
  rate,
  loadingRate
}) => {
  //EU/US, USD, EUR
  const [timeframe, setTimeframe] = useState(null);
  const [loading, setloading] = useState(true);
  const { t } = useTranslation();
  const { mode } = useMode();
  const pre_url = 'https://www.alphavantage.co/query?';
  const key = `apikey=${process.env.REACT_APP_ALPHAVANTAGE_API_KRY}`;
  const symbol = `from_symbol=${from}&to_symbol=${to}`;
  const canvasRef = useRef(null); // Ref to the canvas element
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    const input = e.target.value;

    // Use a regular expression to check if the input is a valid float
    const isValidFloat = /^-?\d*(\.\d*)?$/.test(input);

    if (isValidFloat || input === '') {
      setInputValue(input);
    }
  };

  function formatChartDataMMDDHHSS(prices) {
    const formattedData = [];

    for (const entry of prices) {
      const { date, price } = entry;
      const match = /(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):\d{2}/.exec(date);

      if (match) {
        const month = match[2];
        const day = match[3];
        const hour = match[4];
        const minute = match[5];

        const formattedDate = `${month}-${day} ${hour}:${minute}`;
        formattedData.push({ date: formattedDate, price });
      }
    }

    return formattedData;
  }

  function formatChartDataMMDD(prices) {
    const formattedData = [];

    for (const entry of prices) {
      const { date, price } = entry;
      const match = /(\d{4})-(\d{2})-(\d{2})/.exec(date);

      if (match) {
        const month = match[2];
        const day = match[3];

        const formattedDate = `${month}-${day}`;
        formattedData.push({ date: formattedDate, price });
      }
    }

    return formattedData;
  }

  const fetchData = async () => {
    try {
      let url;
      const currentDate = new Date();
      let startDate, startDateString, response, prices;
      startDate = new Date(currentDate);
      switch (timeframe) {
        case '1d':
          startDate.setDate(currentDate.getDate() - 1);
          startDateString = startDate.toISOString().split('T')[0];
          url = `${pre_url}function=FX_INTRADAY&${symbol}&interval=15min&${key}`;
          response = await axios.get(url);
          prices = response.data['Time Series FX (15min)'];
          break;
        case '7d':
          startDate.setDate(currentDate.getDate() - 7);
          startDateString = startDate.toISOString().split('T')[0];
          url = `${pre_url}function=FX_DAILY&${symbol}&RANGE=1day&${key}`;
          response = await axios.get(url);
          prices = response.data['Time Series FX (Daily)'];
          break;
        case '30d':
          startDate.setDate(currentDate.getDate() - 30);
          startDateString = startDate.toISOString().split('T')[0];
          url = `${pre_url}function=FX_DAILY&${symbol}&RANGE=1day&${key}`;
          response = await axios.get(url);
          prices = response.data['Time Series FX (Daily)'];
          break;
        case '90d':
          startDate.setDate(currentDate.getDate() - 90);
          startDateString = startDate.toISOString().split('T')[0];
          url = `${pre_url}function=FX_WEEKLY&${symbol}&RANGE=1day&${key}`;
          response = await axios.get(url);
          prices = response.data['Time Series FX (Weekly)'];
          break;
        case '365d':
          startDate.setDate(currentDate.getDate() - 365);
          startDateString = startDate.toISOString().split('T')[0];
          url = `${pre_url}function=FX_MONTHLY&${symbol}&range=1day&${key}`;
          response = await axios.get(url);
          prices = response.data['Time Series FX (Monthly)'];
          break;
        default:
          break;
      }

      let dataArray = [];
      const tempArr = [];
      if (prices !== undefined && prices !== null) {
        Object.keys(prices).map((date) => {
          if (new Date(date).getTime() > new Date(startDateString).getTime()) {
            dataArray.push({
              date,
              price: parseFloat(prices[date]['4. close'])
            });
          }
          return null;
        });
      }
      if (timeframe === '1d') {
        dataArray = formatChartDataMMDDHHSS(dataArray);
      } else if (timeframe !== '365d')
        dataArray = formatChartDataMMDD(dataArray);

      // Destroy the existing Chart instance if it exists
      if (canvasRef?.current?.chart) {
        canvasRef.current.chart.destroy();
      }

      dataArray.reverse();

      let interval = Math.floor(dataArray.length / 5);
      if (timeframe === '1d') {
        let prices_interval = Math.floor(dataArray.length / 15);
        let temp_arr = [];
        dataArray?.forEach((p, i) => {
          if (i % prices_interval !== 0 && i !== dataArray.length - 1) {
          } else temp_arr.push(p);
        });
        dataArray = temp_arr;
      }
      dataArray.forEach((element, index) => {
        if (index % interval !== 0 && index !== dataArray.length - 1) {
          tempArr.push({
            date: ' ',
            price: element.price
          });
        } else {
          tempArr.push(element);
        }
      });

      const labels = tempArr.map((entry) => entry.date);
      const prices_array = tempArr.map((entry) => entry.price);

      // Create a new Chart instance
      const newChartInstance = new Chart(canvasRef?.current, {
        type: 'line',
        data: {
          labels,
          datasets: [
            {
              label: '',
              data: prices_array,
              borderColor: '#467b9e',
              fill: true
            }
          ]
        },
        // options: {
        //   // responsive: true,
        //   // maintainAspectRatio: false,
        //   plugins: {
        //     title: {
        //       display: true,
        //       text: title
        //     },
        //     legend: false,
        //     tooltip: true
        //   }
        // }
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: title
            },
            legend: false,
            tooltip: true
          },
          interaction: {
            intersect: true
          }
        },
        scales: {
          x: {
            display: true,
            title: {
              display: true
            }
          },
          y: {
            display: true,
            title: {
              display: true,
              text: 'Value'
            },
            suggestedMin: -10,
            suggestedMax: 200
          }
        }
      });

      // Store the new Chart instance in the canvasRef
      canvasRef.current.chart = newChartInstance;
      setloading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    const renderChart = async () => {
      if (!loading) setloading(true);
      // Fetch and render new data
      await fetchData();
    };

    renderChart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeframe]);

  useEffect(() => {
    setTimeframe('1d');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full">
      <div className="flex flex-col items-center w-full gap-5">
        <div
          className={`flex items-center justify-center gap-5 mb-4  ${
            mode ? 'text-white' : 'text-blue-600'
          } transition-all`}
        >
          <div
            className={`text-sm font-semibold cursor-pointer hover:opacity-70 ${
              timeframe === '1d' ? 'opacity-60' : 'opacity-100'
            }`}
            onClick={() => {
              setTimeframe('1d');
            }}
          >
            1D
          </div>
          <div
            className={`text-sm font-semibold cursor-pointer hover:opacity-70 ${
              timeframe === '7d' ? 'opacity-60' : 'opacity-100'
            }`}
            onClick={() => {
              setTimeframe('7d');
            }}
          >
            7D
          </div>
          <div
            className={`text-sm font-semibold cursor-pointer hover:opacity-70 ${
              timeframe === '30d' ? 'opacity-60' : 'opacity-100'
            }`}
            onClick={() => {
              setTimeframe('30d');
            }}
          >
            1M
          </div>
          <div
            className={`text-sm font-semibold cursor-pointer hover:opacity-70 ${
              timeframe === '90d' ? 'opacity-60' : 'opacity-100'
            }`}
            onClick={() => {
              setTimeframe('90d');
            }}
          >
            3M
          </div>
          <div
            className={`text-sm font-semibold cursor-pointer hover:opacity-70 ${
              timeframe === '365d' ? 'opacity-60' : 'opacity-100'
            }`}
            onClick={() => {
              setTimeframe('365d');
            }}
          >
            1Y
          </div>
        </div>
      </div>
      <div className="relative flex w-full">
        <canvas ref={canvasRef} width={'100%'} height={'50%'}></canvas>
        <div className="absolute w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          {loading ? (
            <ThreeDots
              width={'100%'}
              height={'100%'}
              stroke="#007bff"
              fill="#007bff"
              speed={0.75}
            />
          ) : null}
        </div>
      </div>
      <Board>
        <div className="flex flex-col items-center gap-5">
          <span className="flex w-fit">{mode ? image_dark : image_light}</span>
          <span>
            {loadingRate || rate === null ? (
              <SpinningCircles stroke="#007bff" speed={1.5} fill="#007bff" />
            ) : (
              Number(rate).toFixed(2) + ' $'
            )}
          </span>
          <div className="relative flex flex-wrap items-center justify-center w-3/4 gap-3 text-lg font-semibold">
            <div className="flex flex-col items-start justify-start gap-2 text-gray-500">
              <input
                className="w-full py-2 bg-inherit text-center border rounded-md border-[#5F5F5F]"
                // defaultValue={value}
                type="text"
                value={inputValue}
                onChange={handleInputChange}
              />{' '}
              <span className="text-sm text-center">
                {rate !== null
                  ? parseFloat(rate * Number(inputValue)).toFixed(2) + ' $'
                  : 0 + ' $'}
              </span>
            </div>
            <BuyToken
              buttonTitle={`${t('buy')} ${title}`}
              token={title}
              value={
                rate === null
                  ? null
                  : parseFloat(rate * Number(inputValue)).toFixed(2)
              }
            />
          </div>
        </div>
      </Board>
    </div>
  );
};

export default PriceChart;
