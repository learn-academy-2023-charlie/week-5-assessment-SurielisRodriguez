# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.

#Psuedo Code
# Process: I created a method that takes in the array and the letter we want to use as parameters to find words containing the specified letter
# Filter_letter: Methods that uses the .filter method to sort through our array and passing word as our parameter we cn evaluate if the word contains our letter by using the .includes? method. 
# Filtered_arr: we define our new variable and reference our method name, and pass our beverages_array and selected letter for evalutaion. 
# Dsiplay: we display our expected outcome by refrencing our new variable.


beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

filter_letter_o = 'o'
# Expected output: ['coffee', 'soda water']
filter_letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']


def filter_letter(arr, letter)
    arr.filter {|word| word.include?(letter)}
end

filtered_arr = filter_letter(beverages_array,filter_letter_o)

p filtered_arr



# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'

us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], northeast: ['Maine', 'New Hampshire', 'Rhode Island'] }
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Rhode Island', 'Washington'] 

# Pseudo Code:
# Process: I created two methods one that can get rid of the nested arrays and one that can sort them alphabetically so that we can get the expected outcome. 
# Flatten Hash: I created a method that takes the hash as an input and uses the .flatten method to extract the values from the nested arrays.
# newArr: I define the new array to be used for refrence later
# Organize: I create a method that uses the .map method to iterate through our new array and pass our states through and use the .sort method to sort through our states and alphabetize them correctly.
# DIsplay: To correctly display our outcome, we refrence our organizer method and use our flattened array defined as newArr to produce expected outcome. 



def flatten_hash(hash)
   hash.values.flatten
end

newArr = flatten_hash(us_states)

def organize(arr)
    arr.map { |states| states}.sort
end    
puts organize(newArr)





# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Pseudo Code:
# Process: create a class that is initialized with a model, wheels, & current speed and create a bike info method that returns a sentence with bike info.
# Class: I created a class that has required values for initialiation and pass those values through our attribute accesor so we can reference the values in our next method.
# Method: I created a method that uses string interpolation to take in the values to build our sentence. 
# Display: I created a new bike instance and pass the name Trek to it so we can complete our sentence and display expected outcome. 

class Bike
    attr_accessor :model, :wheels, :current_speed, :bike_info, :brake, :pedal_faster, :zero
    def initialize(model)
        @model= model
        @wheels= 2
        @current_speed= 0
        @zero = 0
    end
    
    def bike_info 
       "The #{model} bike has #{wheels} wheels and is going #{current_speed} mph."
    end

    def pedal_faster(number)
        @current_speed += number
    end 
    
    def brake(number)
        @current_speed -= number 
        # if @current_speed < 0 
        #     @current_speed = 0 
        # else 
        #     @current_speed -= number  
        # end   
        @current_speed < 0 ? @current_speed = 0 : @current_speed -= number
    end     

end  

trek = Bike.new('Trek')
trek.pedal_faster(10)
trek.brake(11)
p trek.bike_info
# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'



# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Pseudo code:
# Process: I created two different methods, one that increases speed by a specified number and one that decreases speed but does not speed go into negative numbers.
# Pedal faster: Method adds specified number to speed
# Brake: Brake has a conditional method, I created my method to subtract the specified number but then added a conditional to evaluate the final speed number. I origannly made it an if else statement that evalutates if the total speed is less than zero, it will display zero. I refactored my if else statement and using my two evalutation statements I created a ternary operator to make the evalutaion and reduce my code block. 



# def pedal_faster(number)
#     @current_speed += number
# end 

# def brake(number)
#     @current_speed -= number 
#     # if @current_speed < 0 
#     #     @current_speed = 0 
#     # else 
#     #     @current_speed -= number  
#     # end   
#     @current_speed < 0 ? @current_speed = 0 : @current_speed -= number
# end     



# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0
