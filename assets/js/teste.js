  useEffect(() => {
    // Função para buscar os grupos do MongoDB
    const fetchGroups = async () => {
      const response = await fetch(process.env.API_URL);
      const data = await response.json();
      setGroups(data.groups);
    };
    fetchGroups();
  }, []);