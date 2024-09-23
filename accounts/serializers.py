from .models import UserManagement
from rest_framework import serializers
from rest_framework.validators import UniqueValidator

class RegistrationSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(
        max_length=255,
        validators=[UniqueValidator(queryset=UserManagement.objects.all())]
    )

    class Meta:
        # db_table = 'user_db'        
        model = UserManagement
        fields = ['name', 'email', 'password']
        extra_kwargs = {'password': {'write_only': True}}  # Password should not be read back

    def create(self, validated_data):
        # Create a user using the custom UserManager's create_user method
        return UserManagement.objects.create_user(**validated_data)

class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField(max_length=255)
    password = serializers.CharField(max_length=128, write_only=True)

    def validate(self, attrs):
        email = attrs.get('email')
        password = attrs.get('password')

        # Check if the user exists
        user = UserManagement.objects.filter(email=email).first()
        if user is None:
            raise serializers.ValidationError("Email ISsue")
            # raise serializers.ValidationError("Email or Password is not valid")
        elif not user.check_password(password):
            raise serializers.ValidationError("Passcode Issue")
            
        return attrs  # Return validated data if everything is okay

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserManagement
        fields = ['id', 'email', 'name']