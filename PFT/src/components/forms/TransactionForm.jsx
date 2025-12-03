// Transaction form components for reusable form elements

export const TransactionTypeSelector = ({ value, onChange }) => {
  return (
    <div className="flex gap-3">
      <label className="flex items-center gap-2 cursor-pointer">
        <input 
          type="radio" 
          name="type" 
          value="income" 
          checked={value === 'income'}
          onChange={onChange}
          className="text-matcha dark:text-green-500 focus:ring-matcha dark:focus:ring-green-500" 
        />
        <span className="text-coffee-grounds dark:text-gray-100">Income</span>
      </label>
      <label className="flex items-center gap-2 cursor-pointer">
        <input 
          type="radio" 
          name="type" 
          value="expense" 
          checked={value === 'expense'}
          onChange={onChange}
          className="text-honey-drizzle dark:text-orange-500 focus:ring-honey-drizzle dark:focus:ring-orange-500" 
        />
        <span className="text-coffee-grounds dark:text-gray-100">Expense</span>
      </label>
    </div>
  )
}

export const TransactionCategorySelect = ({ value, onChange, error }) => {
  return (
    <div>
      <select 
        value={value}
        onChange={onChange}
        className="w-full border border-honey-drizzle dark:border-slate-600 dark:bg-slate-700 rounded-lg py-2 px-3 text-coffee-grounds dark:text-gray-100 focus:ring-2 focus:ring-sea-blue dark:focus:ring-blue-500 focus:border-sea-blue dark:focus:border-blue-500 focus:outline-none"
      >
        <option value="">Select category</option>
        <option>Housing</option>
        <option>Food</option>
        <option>Subscription</option>
        <option>Salary</option>
        <option>Entertainment</option>
      </select>
      {error && <p className="text-sm text-honey-drizzle dark:text-orange-400 mt-1">{error}</p>}
    </div>
  )
}

