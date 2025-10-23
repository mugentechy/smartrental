const counties = [
  { value: '001', label: 'Mombasa', flag: '🇰🇪', latlng: [-4.0434771, 39.6682065], region: 'Coast' },
  { value: '002', label: 'Kwale', flag: '🇰🇪', latlng: [-4.1718, 39.4521], region: 'Coast' },
  { value: '003', label: 'Kilifi', flag: '🇰🇪', latlng: [-3.5107, 39.9093], region: 'Coast' },
  { value: '004', label: 'Tana River', flag: '🇰🇪', latlng: [-1.8119, 40.0469], region: 'Coast' },
  { value: '005', label: 'Lamu', flag: '🇰🇪', latlng: [-2.2717, 40.902], region: 'Coast' },
  // Add the rest of the counties here
];

const useCounties = () => {
  const getAll = () => counties;

  const getByValue = (value) => {
    return counties.find((item) => item.value === value);
  }

  return {
    getAll,
    getByValue,
  };
};

export default useCounties;
