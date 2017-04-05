class CreateTodos < ActiveRecord::Migration[5.0]
  def change
    create_table :todos do |t|
      t.string :title
      t.datetime :due_time
      t.boolean :done

      t.timestamps
    end
  end
end
